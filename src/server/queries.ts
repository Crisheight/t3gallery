import "server-only";
import {db} from "~/server/db";
import {auth} from "@clerk/nextjs/server";

export async function GetDefaultImages() {
    return db.query.images.findMany({
        orderBy: (model, {desc}) => desc(model.id),
    });
}

export async function GetUserImages() {
    const user = auth();

    if(!user.userId) throw new Error("Unauthorized");

    return db.query.images.findMany({
        where: (model, {eq}) => eq(model.userId, user.userId),
        orderBy: (model, {desc}) => desc(model.id),
    });
}