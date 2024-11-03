import { BONUS_NUMBER_MESSAGES } from '../constants/errorMessages.js';

class ValidateBonusNumber {
  validateIsNumber(input) {
    if (Number.isNaN(Number(input))) {
      throw new Error(BONUS_NUMBER_MESSAGES.NOT_A_NUMBER);
    }
  }

  validateBonusNumberRange(number) {
    if (number < 1 || number > 45) {
      throw new Error(BONUS_NUMBER_MESSAGES.INVALID_RANGE);
    }
  }

  validateDuplicateWithWinningNumbers(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(BONUS_NUMBER_MESSAGES.DUPLICATE_WITH_WINNING);
    }
  }

  validateBonusNumber(input, winningNumbers) {
    this.validateIsNumber(input);
    const bonusNumber = Number(input);
    this.validateBonusNumberRange(bonusNumber);
    this.validateDuplicateWithWinningNumbers(bonusNumber, winningNumbers);
    return bonusNumber;
  }
}

export default ValidateBonusNumber;
