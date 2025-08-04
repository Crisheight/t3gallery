import "server-only";
import {db} from "~/server/db";
import {auth} from "@clerk/nextjs/server";

export async function getDefaultImages() {
    return db.query.images.findMany({
        where: (model, { eq }) => eq(model.isPublic, true),
        orderBy: (model, {desc}) => desc(model.id),
    });
}

export async function getUserImages() {
    const user = auth();

    if(!user.userId) throw new Error("Unauthorized");

    return db.query.images.findMany({
        where: (model, {eq}) => eq(model.userId, user.userId),
        orderBy: (model, {desc}) => desc(model.id),
    });
}

export async function getImageById(id: number) {
    const user = auth();

    const image = await db.query.images.findFirst({
        where: (model, { eq }) => eq(model.id, id),
    });

    if (!image) throw new Error("Image not found");

    if (image.isPublic) {
        return image;
    }


    if (!user.userId || image.userId !== user.userId) {
        throw new Error("Unauthorized");
    }

    return image;
}