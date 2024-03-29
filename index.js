import { SigningStargateClient, defaultRegistryTypes } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSetDecorationPosition } from "./types/bears/tx";
import { MsgDeleteApiary } from "./types/bears/tx";
import { MsgSetApiaryHouseForBee } from "./types/bears/tx";
import { MsgCreateApiary } from "./types/bears/tx";
import { MsgSetName } from "./types/bears/tx";
import { MsgInitGameAndSetName } from "./types/bears/tx";
import { MsgUnsetApiaryHouseForBee } from "./types/bears/tx";
import { MsgCreateTree } from "./types/bears/tx";
import { MsgCollectHoneyFromApiary } from "./types/bears/tx";
import { MsgCreateDecoration } from "./types/bears/tx";
import { MsgInitGameAndCreateDecoration } from "./types/bears/tx";
import { MsgBurnCoins } from "./types/bears/tx";
import { MsgUnsetDecorationPosition } from "./types/bears/tx";
import { MsgInitGameAndCreateBee } from "./types/bears/tx";
import { MsgExtendField } from "./types/bears/tx";
import { MsgClearApiaryFromBees } from "./types/bears/tx";
import { MsgCreateBee } from "./types/bears/tx";
import { MsgMoveItemOnField } from "./types/bears/tx";
import { MsgInitGameAndExtendField } from "./types/bears/tx";
import { MsgInitGameAndCreateApiary } from "./types/bears/tx";
import { MsgInitGameAndCreateTree } from "./types/bears/tx";
const types = [
    ["/MonetaToday.honeywood.bears.MsgSetDecorationPosition", MsgSetDecorationPosition],
    ["/MonetaToday.honeywood.bears.MsgDeleteApiary", MsgDeleteApiary],
    ["/MonetaToday.honeywood.bears.MsgSetApiaryHouseForBee", MsgSetApiaryHouseForBee],
    ["/MonetaToday.honeywood.bears.MsgCreateApiary", MsgCreateApiary],
    ["/MonetaToday.honeywood.bears.MsgSetName", MsgSetName],
    ["/MonetaToday.honeywood.bears.MsgInitGameAndSetName", MsgInitGameAndSetName],
    ["/MonetaToday.honeywood.bears.MsgUnsetApiaryHouseForBee", MsgUnsetApiaryHouseForBee],
    ["/MonetaToday.honeywood.bears.MsgCreateTree", MsgCreateTree],
    ["/MonetaToday.honeywood.bears.MsgCollectHoneyFromApiary", MsgCollectHoneyFromApiary],
    ["/MonetaToday.honeywood.bears.MsgCreateDecoration", MsgCreateDecoration],
    ["/MonetaToday.honeywood.bears.MsgInitGameAndCreateDecoration", MsgInitGameAndCreateDecoration],
    ["/MonetaToday.honeywood.bears.MsgBurnCoins", MsgBurnCoins],
    ["/MonetaToday.honeywood.bears.MsgUnsetDecorationPosition", MsgUnsetDecorationPosition],
    ["/MonetaToday.honeywood.bears.MsgInitGameAndCreateBee", MsgInitGameAndCreateBee],
    ["/MonetaToday.honeywood.bears.MsgExtendField", MsgExtendField],
    ["/MonetaToday.honeywood.bears.MsgClearApiaryFromBees", MsgClearApiaryFromBees],
    ["/MonetaToday.honeywood.bears.MsgCreateBee", MsgCreateBee],
    ["/MonetaToday.honeywood.bears.MsgMoveItemOnField", MsgMoveItemOnField],
    ["/MonetaToday.honeywood.bears.MsgInitGameAndExtendField", MsgInitGameAndExtendField],
    ["/MonetaToday.honeywood.bears.MsgInitGameAndCreateApiary", MsgInitGameAndCreateApiary],
    ["/MonetaToday.honeywood.bears.MsgInitGameAndCreateTree", MsgInitGameAndCreateTree],
    ...defaultRegistryTypes
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        client,
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgSetDecorationPosition: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgSetDecorationPosition", value: MsgSetDecorationPosition.fromPartial(data) }),
        msgDeleteApiary: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgDeleteApiary", value: MsgDeleteApiary.fromPartial(data) }),
        msgSetApiaryHouseForBee: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgSetApiaryHouseForBee", value: MsgSetApiaryHouseForBee.fromPartial(data) }),
        msgCreateApiary: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgCreateApiary", value: MsgCreateApiary.fromPartial(data) }),
        msgSetName: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgSetName", value: MsgSetName.fromPartial(data) }),
        msgInitGameAndSetName: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndSetName", value: MsgInitGameAndSetName.fromPartial(data) }),
        msgUnsetApiaryHouseForBee: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgUnsetApiaryHouseForBee", value: MsgUnsetApiaryHouseForBee.fromPartial(data) }),
        msgCreateTree: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgCreateTree", value: MsgCreateTree.fromPartial(data) }),
        msgCollectHoneyFromApiary: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgCollectHoneyFromApiary", value: MsgCollectHoneyFromApiary.fromPartial(data) }),
        msgCreateDecoration: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgCreateDecoration", value: MsgCreateDecoration.fromPartial(data) }),
        msgInitGameAndCreateDecoration: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndCreateDecoration", value: MsgInitGameAndCreateDecoration.fromPartial(data) }),
        msgBurnCoins: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgBurnCoins", value: MsgBurnCoins.fromPartial(data) }),
        msgUnsetDecorationPosition: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgUnsetDecorationPosition", value: MsgUnsetDecorationPosition.fromPartial(data) }),
        msgInitGameAndCreateBee: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndCreateBee", value: MsgInitGameAndCreateBee.fromPartial(data) }),
        msgExtendField: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgExtendField", value: MsgExtendField.fromPartial(data) }),
        msgClearApiaryFromBees: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgClearApiaryFromBees", value: MsgClearApiaryFromBees.fromPartial(data) }),
        msgCreateBee: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgCreateBee", value: MsgCreateBee.fromPartial(data) }),
        msgMoveItemOnField: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgMoveItemOnField", value: MsgMoveItemOnField.fromPartial(data) }),
        msgInitGameAndExtendField: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndExtendField", value: MsgInitGameAndExtendField.fromPartial(data) }),
        msgInitGameAndCreateApiary: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndCreateApiary", value: MsgInitGameAndCreateApiary.fromPartial(data) }),
        msgInitGameAndCreateTree: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndCreateTree", value: MsgInitGameAndCreateTree.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { types, txClient, queryClient, };
