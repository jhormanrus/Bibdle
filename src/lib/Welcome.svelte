<script>
  import Bibdle from './Bibdle.svelte'
  import DiceIcon from '../assets/DiceIcon.svelte'
  import HomeIcon from '../assets/HomeIcon.svelte'
  import EyeIcon from '../assets/EyeIcon.svelte'
  import DarkModeIcon from '../assets/DarkModeIcon.svelte'
  import HelpIcon from '../assets/HelpIcon.svelte'
</script>

<main class="grow self-center flex flex-col items-center gap-7 max-w-full w-[32rem] px-4">
  <Bibdle />
  <div class="space-y-3">
    <h2>Bienvenido</h2>
    <p>¡Disfruta de una forma divertida y educativa de interactuar con las sagradas escrituras! Con Bibdle, puedes resolver rompecabezas de palabras basado en la Biblia.</p>
  </div>
  <div class="space-y-3">
    <h2>Antes de empezar</h2>
    <p>En la parte superior de la pantalla encontrarás una barra de navegación que te permite acceder a las distintas secciones de la aplicación. A continuación te explicamos para qué sirve cada uno de los botones de esta barra:</p>
    <div class="space-y-2 sm:mx-4">
      <div class="flex items-center gap-3">
        <button type="button" class="btn" title="Volver al inicio">
          <HomeIcon />
        </button>
        <p>Este botón te llevará al tablero de juego.</p>
      </div>
      <div class="flex items-center gap-3">
        <button type="button" class="btn">
          <DiceIcon />
          <!-- <img src={diceSvg} width="24" height="24" alt="dice" title="Palabra aleatoria"> -->
        </button>
        <p>Está disponible solo en el tablero de juego, úsalo para generar una nueva palabra.</p>
      </div>
      <div class="flex items-center gap-3">
        <button type="button" class="btn" title="Mostrar palabra">
          <EyeIcon />
        </button>
        <p>Usa este botón para revelar la palabra que debes adivinar.</p>
      </div>
      <div class="flex items-center gap-3">
        <button type="button" class="btn" title="Modo oscuro">
          <DarkModeIcon />
        </button>
        <p>Puedes activar y desactivar el modo oscuro de la aplicación.</p>
      </div>
      <div class="flex items-center gap-3">
        <button type="button" class="btn" title="Ayuda">
          <HelpIcon />
        </button>
        <p>Usa este botón para ver las instrucciones del juego.</p>
      </div>
    </div>
    <p>Te recomendamos que leas las instrucciones del juego antes de empezar a jugar.</p>
  </div>
</main>
<footer class="w-full px-6 py-4 sm:px-12 sm:py-6">
  Hecho con 💖 por <a class="underline" href="https://jhorman.vercel.app">Jhorman</a>
</footer>

<style lang="postcss">
  .btn {
    @apply min-w-fit pointer-events-none;
  }
</style>