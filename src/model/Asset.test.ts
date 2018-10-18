import { Asset } from ".";

describe("Asset", () => {
    it("should create a new asset instance", () => {
        const name = "Test";

        const client = new Asset(name);

        expect(client).toBeDefined();
        expect(client).toBeInstanceOf(Asset);
        expect(client.name).toBe(name);
    });
});
