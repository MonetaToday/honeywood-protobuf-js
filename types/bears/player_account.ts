/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { BaseVestingAccount } from "../cosmos/vesting/v1beta1/vesting";

export const protobufPackage = "MonetaToday.honeywood.bears";

export interface VestingParams {
  id: string;
  honey_start_from_listing_in_month: number;
  honey_end_from_listing_in_month: number;
  cone_start_from_listing_in_month: number;
  cone_end_from_listing_in_month: number;
}

export interface PlayerAccount {
  base_vesting_account: BaseVestingAccount | undefined;
  bears: number[];
  vesting_type: string;
}

const baseVestingParams: object = {
  id: "",
  honey_start_from_listing_in_month: 0,
  honey_end_from_listing_in_month: 0,
  cone_start_from_listing_in_month: 0,
  cone_end_from_listing_in_month: 0,
};

export const VestingParams = {
  encode(message: VestingParams, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.honey_start_from_listing_in_month !== 0) {
      writer.uint32(16).uint64(message.honey_start_from_listing_in_month);
    }
    if (message.honey_end_from_listing_in_month !== 0) {
      writer.uint32(24).uint64(message.honey_end_from_listing_in_month);
    }
    if (message.cone_start_from_listing_in_month !== 0) {
      writer.uint32(32).uint64(message.cone_start_from_listing_in_month);
    }
    if (message.cone_end_from_listing_in_month !== 0) {
      writer.uint32(40).uint64(message.cone_end_from_listing_in_month);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VestingParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVestingParams } as VestingParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.honey_start_from_listing_in_month = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 3:
          message.honey_end_from_listing_in_month = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 4:
          message.cone_start_from_listing_in_month = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 5:
          message.cone_end_from_listing_in_month = longToNumber(
            reader.uint64() as Long
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VestingParams {
    const message = { ...baseVestingParams } as VestingParams;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (
      object.honey_start_from_listing_in_month !== undefined &&
      object.honey_start_from_listing_in_month !== null
    ) {
      message.honey_start_from_listing_in_month = Number(
        object.honey_start_from_listing_in_month
      );
    } else {
      message.honey_start_from_listing_in_month = 0;
    }
    if (
      object.honey_end_from_listing_in_month !== undefined &&
      object.honey_end_from_listing_in_month !== null
    ) {
      message.honey_end_from_listing_in_month = Number(
        object.honey_end_from_listing_in_month
      );
    } else {
      message.honey_end_from_listing_in_month = 0;
    }
    if (
      object.cone_start_from_listing_in_month !== undefined &&
      object.cone_start_from_listing_in_month !== null
    ) {
      message.cone_start_from_listing_in_month = Number(
        object.cone_start_from_listing_in_month
      );
    } else {
      message.cone_start_from_listing_in_month = 0;
    }
    if (
      object.cone_end_from_listing_in_month !== undefined &&
      object.cone_end_from_listing_in_month !== null
    ) {
      message.cone_end_from_listing_in_month = Number(
        object.cone_end_from_listing_in_month
      );
    } else {
      message.cone_end_from_listing_in_month = 0;
    }
    return message;
  },

  toJSON(message: VestingParams): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.honey_start_from_listing_in_month !== undefined &&
      (obj.honey_start_from_listing_in_month =
        message.honey_start_from_listing_in_month);
    message.honey_end_from_listing_in_month !== undefined &&
      (obj.honey_end_from_listing_in_month =
        message.honey_end_from_listing_in_month);
    message.cone_start_from_listing_in_month !== undefined &&
      (obj.cone_start_from_listing_in_month =
        message.cone_start_from_listing_in_month);
    message.cone_end_from_listing_in_month !== undefined &&
      (obj.cone_end_from_listing_in_month =
        message.cone_end_from_listing_in_month);
    return obj;
  },

  fromPartial(object: DeepPartial<VestingParams>): VestingParams {
    const message = { ...baseVestingParams } as VestingParams;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (
      object.honey_start_from_listing_in_month !== undefined &&
      object.honey_start_from_listing_in_month !== null
    ) {
      message.honey_start_from_listing_in_month =
        object.honey_start_from_listing_in_month;
    } else {
      message.honey_start_from_listing_in_month = 0;
    }
    if (
      object.honey_end_from_listing_in_month !== undefined &&
      object.honey_end_from_listing_in_month !== null
    ) {
      message.honey_end_from_listing_in_month =
        object.honey_end_from_listing_in_month;
    } else {
      message.honey_end_from_listing_in_month = 0;
    }
    if (
      object.cone_start_from_listing_in_month !== undefined &&
      object.cone_start_from_listing_in_month !== null
    ) {
      message.cone_start_from_listing_in_month =
        object.cone_start_from_listing_in_month;
    } else {
      message.cone_start_from_listing_in_month = 0;
    }
    if (
      object.cone_end_from_listing_in_month !== undefined &&
      object.cone_end_from_listing_in_month !== null
    ) {
      message.cone_end_from_listing_in_month =
        object.cone_end_from_listing_in_month;
    } else {
      message.cone_end_from_listing_in_month = 0;
    }
    return message;
  },
};

const basePlayerAccount: object = { bears: 0, vesting_type: "" };

export const PlayerAccount = {
  encode(message: PlayerAccount, writer: Writer = Writer.create()): Writer {
    if (message.base_vesting_account !== undefined) {
      BaseVestingAccount.encode(
        message.base_vesting_account,
        writer.uint32(10).fork()
      ).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.bears) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.vesting_type !== "") {
      writer.uint32(26).string(message.vesting_type);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PlayerAccount {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlayerAccount } as PlayerAccount;
    message.bears = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base_vesting_account = BaseVestingAccount.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.bears.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.bears.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 3:
          message.vesting_type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayerAccount {
    const message = { ...basePlayerAccount } as PlayerAccount;
    message.bears = [];
    if (
      object.base_vesting_account !== undefined &&
      object.base_vesting_account !== null
    ) {
      message.base_vesting_account = BaseVestingAccount.fromJSON(
        object.base_vesting_account
      );
    } else {
      message.base_vesting_account = undefined;
    }
    if (object.bears !== undefined && object.bears !== null) {
      for (const e of object.bears) {
        message.bears.push(Number(e));
      }
    }
    if (object.vesting_type !== undefined && object.vesting_type !== null) {
      message.vesting_type = String(object.vesting_type);
    } else {
      message.vesting_type = "";
    }
    return message;
  },

  toJSON(message: PlayerAccount): unknown {
    const obj: any = {};
    message.base_vesting_account !== undefined &&
      (obj.base_vesting_account = message.base_vesting_account
        ? BaseVestingAccount.toJSON(message.base_vesting_account)
        : undefined);
    if (message.bears) {
      obj.bears = message.bears.map((e) => e);
    } else {
      obj.bears = [];
    }
    message.vesting_type !== undefined &&
      (obj.vesting_type = message.vesting_type);
    return obj;
  },

  fromPartial(object: DeepPartial<PlayerAccount>): PlayerAccount {
    const message = { ...basePlayerAccount } as PlayerAccount;
    message.bears = [];
    if (
      object.base_vesting_account !== undefined &&
      object.base_vesting_account !== null
    ) {
      message.base_vesting_account = BaseVestingAccount.fromPartial(
        object.base_vesting_account
      );
    } else {
      message.base_vesting_account = undefined;
    }
    if (object.bears !== undefined && object.bears !== null) {
      for (const e of object.bears) {
        message.bears.push(e);
      }
    }
    if (object.vesting_type !== undefined && object.vesting_type !== null) {
      message.vesting_type = object.vesting_type;
    } else {
      message.vesting_type = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
