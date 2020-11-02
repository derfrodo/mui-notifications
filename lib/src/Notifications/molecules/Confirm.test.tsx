import React from "react";
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import { Confirm } from "./Confirm";

describe("Confirm Component Tests", () => {
    it("Confirm.renders component", async () => {
        const { getByTestId } = render(
            <Confirm confirmData={{ closed: false, message: "Nachricht" }} />
        );
        await waitFor(
            () => {
                const element = getByTestId("confirmDialog");
                expect(element).toBeInTheDocument();
            },
            { timeout: 200 }
        );
    });
    it("Confirm.renders nothin if closed", async () => {
        const { queryByTestId, debug } = render(
            <Confirm confirmData={{ closed: true, message: "Nachricht" }} />
        );

        const element = await queryByTestId("confirmDialog");
        expect(element).toBeNull(); //.toBeInTheDocument();
    });
});
