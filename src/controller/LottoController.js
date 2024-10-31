import { Console, Random } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import Lotto from '../Lotto.js';

class LottoController {
  #inputView;

  constructor() {
    this.#inputView = new InputView();
  }

  async play() {
    try {
      const amount = await this.#inputView.readLottoAmount();
      const lottos = this.#generateLottos(amount);
      Console.print(amount);
      this.#printLottos(amount, lottos);
      const winningNumbers = await this.#inputView.readWinningNumbers();
      Console.print(winningNumbers);
      const bonusNumber = await this.#inputView.readBonusNumber();
      Console.print(bonusNumber);
    } catch (error) {
      Console.print(error);
    }
  }

  #generateLottos(amount) {
    const lottoCount = Math.floor(amount / 1000);
    return Array.from({ length: lottoCount }, () => this.#createLotto());
  }

  #createLotto() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers);
  }

  #printLottos(amount, lottos) {
    const lottoCount = Math.floor(amount / 1000);
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }
}

export default LottoController;
