import * as proto from 'org_xprof/frontend/app/common/interfaces/hlo.jsonpb_decls';
import {toNumber} from 'org_xprof/frontend/app/common/utils/utils';

/**
 * HLO logical buffer representation.
 * @final
 */
export class LogicalBuffer {
  id: number;
  size: number;
  color: number;
  computationName: string;
  instructionName: string;
  shapeIndex: number[];

  constructor(buffer?: proto.LogicalBufferProto) {
    buffer = buffer || {};
    this.id = toNumber(buffer.id || '0');
    this.size = toNumber(buffer.size || '0');
    this.color = toNumber(buffer.color || '0');
    this.computationName = '';
    this.instructionName = '';
    this.shapeIndex = [];
    if (buffer.definedAt) {
      this.initBufferLocation(buffer.definedAt);
    }
  }

  /**
   * Constructs the computation, instruction and its shape index, which
   * uniquely identifies a point where a buffer is defined.
   */
  private initBufferLocation(location?: proto.LogicalBufferProto.Location) {
    if (!location) return;
    this.computationName = location.computationName || '';
    this.instructionName = location.instructionName || '';
    if (location.shapeIndex) {
      this.shapeIndex = location.shapeIndex.map((item: string) => Number(item));
    }
  }
}
