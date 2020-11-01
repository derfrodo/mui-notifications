import React from "react";
import { render, waitFor } from "@testing-library/react";
import { Confirm } from "./Confirm";

describe("Confirm Component Tests", () => {
    it("renders component", async () => {
        const { getByTestId } = render(
            <Confirm confirmData={{ closed: false, message: "Nachricht" }} />
        );
        await waitFor(
            () => {
                const hiMessage = getByTestId("confirmDialog");
                expect(hiMessage).toBeInTheDocument();
            },
            { timeout: 200 }
        );
    });
});
