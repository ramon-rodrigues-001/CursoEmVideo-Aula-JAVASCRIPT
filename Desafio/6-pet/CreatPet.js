const verStatus = require("./verStatus")


class CreatPet {
    constructor(name, raça) {
        this.Name = name
        this.Raça = raça
        this.Status = {
          Fome: 50,
          Sono: 20,
          Felicidade: 20
        }
    }


    exibirRosto() {
      console.log('')
      console.log(verStatus(this.Name, this.Status.Fome, this.Status.Sono, this.Status.Felicidade))
      console.log('')
    }
 

    alimentar(valor = 10) {
      this.Status.Fome += valor

      if (this.Status.Fome > 100) {
        this.Status.Fome = 100
      }
    }

    dormir(valor = 10) {
      this.Status.Sono += valor
      this.Status.Felicidade -= valor
      this.Status.Fome -= valor

      if (this.Status.Fome < 0) {
        this.Status.Fome = 0
      }else if (this.Status.Felicidade < 0) {
        this.Status.Felicidade = 0
      }else if (this.Status.Sono > 100) {
        this.Status.Sono = 100
      }
    }

    brincar(valor = 10) {
      this.Status.Felicidade += valor
      this.Status.Sono -= valor
      this.Status.Fome -= valor

      if (this.Status.Fome < 0) {
        this.Status.Fome = 0
      }else if (this.Status.Felicidade > 100) {
        this.Status.Felicidade = 100
      }else if (this.Status.Sono < 0) {
        this.Status.Sono = 0
      }
    }
}

module.exports = CreatPet