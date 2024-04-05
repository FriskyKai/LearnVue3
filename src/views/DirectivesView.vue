<template>
  <section class="m-4">
    <h2 class="text-center">{{ message }}</h2>

    <h3>Директива v-model</h3>
    <form action="#" method="POST">
      <input v-model="login" class="p-1" type="text" name="login" value="" placeholder="Введите логин">
      <p>Ваш логин: {{ login }}</p>
    </form>

    <h3>Директива v-if</h3>
    <div v-if="seen">
      <p>Этот блок виден, так как seen - истина</p>
      <p>А второй блок убран из DOM дерева</p>
    </div>
    <div v-if="!seen">
      <p>Этот блок не виден, так как seen - ложь</p>
      <p>Он убран из DOM дерева</p>
    </div>

    <h3>Директива v-show</h3>
    <div v-show="seen">
      <p>Этот блок виден, так как seen - истина</p>
      <p>А второй блок скрыт с помощью свойства display</p>
    </div>
    <div v-show="!seen">
      <p>Этот блок не виден, так как seen - ложь</p>
      <p>К нему добавлен атрибут style="display: none;"</p>
    </div>

    <h3>Директива v-for</h3>
    <div>
      <p>Список фруктов:</p>
      <ol>
        <li v-for="fruit in fruits">{{ fruit }}</li>
      </ol>
    </div>

    <h3>Директива v-for (массив объектов)</h3>
    <div>
      <p>Список студентов:</p>
      <ol>
        <li v-for="student in students">
          ФИО: <b>{{ student.fio }}</b> <br/>
          День рождения: {{ student.birth }} <br/>
          Пол: {{ student.sex }}
        </li>
      </ol>
    </div>

    <h3>Директива v-bind</h3>
    <div>
      <img v-bind:src="bind_img" alt="Картинка" width="300">
      <br/>
      <input type="text" :value="bind_value" disabled>
    </div>

    <h3>Директива v-on</h3>
    <div>
      <button v-on:click="click_green" class="btn btn-success">Кнопка 1</button>
      <button @click="click_red" class="btn btn-danger m-1">Кнопка 2</button>
    </div>
  </section>
</template>

<style scoped>
  input {
    width: 300px;
  }
</style>

<script>
export default {
  data() {
    return {
      message: 'Приветствую вас на курсе по изучению фреймворка Vue3!',
      login: null,
      seen: true,
      fruits: ['Яблоко', 'Апельсин', 'Банан', 'Груша', 'Папайя'],
      students: [
          {
            fio: 'Евсеев Дмитрий Витальевич',
            birth: '04.11.2005',
            sex: 'Мужской'
          },
          {
            fio: 'Буйкин Андрей Анатольевич',
            birth: '20.12.2005',
            sex: 'Мужской'
          },
          {
            fio: 'Шейкина Елизавета Викторовна',
            birth: '23.04.2005',
            sex: 'Женский'
          }
      ],
      bind_img: 'https://img2.joyreactor.cc/pics/post/%D0%BA%D0%BE%D1%82%D0%B8%D0%BA-%D0%BC%D0%B8%D0%BB%D1%8B%D0%B9-6241576.jpeg',
      bind_value: 'Милый котик',
    }
  },
  methods: {
    click_green() {
      alert('Вы нажали зелёную кнопку');
    },
    click_red() {
      alert('Вы нажали красную кнопку');
    }
  }
}
</script>

