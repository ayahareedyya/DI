import { describe, expect, it } from "vitest";

import { buildApp } from "../src/bootstrap.js";

describe("health", () => {
    it("should return ok", async () => {
        const app = buildApp();

        const res = await app.inject({
            method: "GET",
            url: "/health"
        });
        expect(res.statusCode).toBe(200);
        expect(res.json()).toEqual({ status: "ok" });
    })});