import { EventEmitter2 } from '@nestjs/event-emitter';
import { Inject } from '@nestjs/common';

export function QueueAdapter() {
  return Inject(EventEmitter2);
}
