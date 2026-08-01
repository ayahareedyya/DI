import type {FastifyInstance} from "fastify";

export function routes(app: FastifyInstance) {
  app.get("/health", (request, reply) => {
    reply.send({ status: "ok" });
  });
}