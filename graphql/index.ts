import { User, UserInput } from "./users/users.schema";
import { UsersResolver } from "./users/resolver";
import { buildSchema } from "type-graphql";

const resolveSchema = async () => {
    const schema = await buildSchema({
        resolvers: [UsersResolver],
        emitSchemaFile: true,
    });

    return schema;
};

export { User, UserInput, UsersResolver, resolveSchema };
