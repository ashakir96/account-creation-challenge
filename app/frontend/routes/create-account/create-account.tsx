import {Card} from "../../reusable-components/card/card.tsx";
import {Input} from "../../reusable-components/input/input.tsx";
import {FlowLayout} from "../../reusable-components/flow-layout/flow-layout.tsx";
import React from "react";

export const CreateAccount = () => {
    return (
        <FlowLayout>
            <Card title="Create New Account">
                <div className="space-y-2">
                    <Input label="Name" />
                </div>
            </Card>
        </FlowLayout>
    )
}