class User {
  constructor(score, hasBoost = true) {
    this.score = score;
    this.hasBoost = hasBoost;
    this.history = [];
    this.debts = 0;

    this.setDebts = (debts) => {
      this.debts = debts;
    };

    this.acceptOffer = () => {
      this.setDebts(this.debts - 1);
      this.history.push({
        status: "accept",
      });
    };

    this.brokenOffer = () => {
      this.setDebts(this.debts + 1);
      this.history.push({
        status: "broken",
      });
    };

    this.boostMessage = (status) => {
      switch (status) {
        case 1:
          return "Você pode aumentar seu Score em até";
        case 2:
          return "Você perdeu o turbo do seu Score";
        case 3:
          return "Você pode aumentar seu Score";
        case 4:
          return "Você ativou o turbo do seu Score";
        case 5:
          return "Você não possui turbo disponível";
      }
    };

    this.getScore = () => {
      const { status, value } = this.statusBoost();

      var boostMessage = this.boostMessage(status);

      var boostValue = null;

      if (status !== 5) {
        boostValue = Math.round(value);
      }

      return {
        score: this.score,
        boost: {
          status,
          value: boostValue,
          message: boostMessage,
        },
      };
    };

    this.statusBoost = () => {
      var boost = this.checkBoost();

      if (boost === null) {
        return {
          status: 5,
          value: null,
        };
      } else if (boost.lost) {
        return {
          status: 2,
          value: boost.lost,
        };
      } else if (boost.pending) {
        return {
          status: 3,
          value: boost.pending,
        };
      } else if (boost.available) {
        return {
          status: 1,
          value: boost.available,
        };
      } else if (boost.complete) {
        return {
          status: 4,
          value: boost.complete,
        };
      }
    };

    this.checkBoost = () => {
      if (!this.hasBoost) {
        return null;
      }

      var maxBoost =
        this.score < 500
          ? this.score * 0.2
          : this.score < 800
          ? this.score * 0.05
          : this.score * 0.03;

      var available = maxBoost;
      var lost = 0;
      var pending = 0;
      var complete = 0;

      if (this.history.find((h) => h.status === "broken")) {
        available = null;
        lost = maxBoost;
      } else if (this.history.find((h) => h.status === "accept")) {
        var debtsPaid = this.history.reduce(
          function (totalDebtsPaid, h) {
            return (h.status === "accept" && totalDebtsPaid + 1) || totalDebtsPaid;
          },
          0
        );

        if (this.debts === 0) {
          available = 0;
          complete = maxBoost;
        } else {
          available = maxBoost / (this.debts + debtsPaid);
          pending = maxBoost - available;
        }
      }

      return {
        available,
        lost,
        pending,
        complete,
      };
    };
  }
}

module.exports = User;
