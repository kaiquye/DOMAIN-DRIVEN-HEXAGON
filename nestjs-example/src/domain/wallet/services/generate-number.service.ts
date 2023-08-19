import { IDomainService } from '../../../shared/structure/app.structure';

class GenerateNumberService implements IDomainService<void, number> {
  readonly min = 10000;
  readonly max = 99999;
  performTask(): number {
    const digit =
      Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    return digit;
  }
}

export default new GenerateNumberService();
