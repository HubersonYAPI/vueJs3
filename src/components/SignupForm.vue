<template>
  <form @submit.prevent="handleSubmit">
      <label>Email</label>
      <input type="email" required v-model="email">

      <label>Mot de Passe</label>
      <input type="password" required v-model="password">
      <div v-if="passwordError" class="error"> {{ passwordError }} </div>

      <label>Rôle</label>
      <select v-model="role">
          <option value="developer">Web Developpeur</option>
          <option value="designer">Web Designer</option>
      </select>

      <label>Competences</label>
      <input type="text" v-model="tempSkill" @keyup="addSkill" placeholder="Appuyer sur la touche 'ENTRER' pour valider">
      <div v-for="skill in skills" :key="skill" class="pill">
          <span @click="deleteSkill(skill)"> {{ skill }} </span>
          <!-- <span @click="deleteskill"> {{ skill }} </span> -->
      </div>

      <div class="terms">
          <input type="checkbox" v-model="terms" required>
          <label>Accepter les conditions generale d'utilisation</label>
      </div>

      <div class="submit">
          <button class="button">Creer un compte</button>
      </div>

    

      
  </form>
  <p>Email: {{ email }} </p>
  <p>Mot de Passe: {{ password }} </p>
  <p>Role: {{ role }} </p>
  <p>Accepter Termes: {{ terms }} </p>

</template>


<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: 'designer',
            terms: false,
            tempSkill: '',
            skills: [],
            passwordError: ''
        }
    },
    methods: {
        addSkill(e) {
            if (e.key === ' ' && this.tempSkill) {
                if (!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill)
                }
                this.tempSkill = ''
            }
        },
        deleteSkill(skill){
            this.skills = this.skills.filter((item) => {
                return skill !== item
            })

        },
        handleSubmit() {
            //Validation de Mot de passe
            this.passwordError = this.password.length > 5 ? 
            '' : 'le Mot de passe doit être au moins de 6 caratères'
        }

    }

}
</script>


<style>

form {
    max-width: 420px;
    margin: 30px auto;
    background: #eee;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    /* color: #aaa; */
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}

.pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: white;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}

.button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}

.submit {
    text-align: center;
}

.error {
    color: red;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>