// Importamos la librería chalk
import chalk from 'chalk';

// Mensajes iniciales
//console.log(chalk.blue('👋 ¡Bienvenido a la Terminal Parlante!'));
//console.info(chalk.green('ℹ️ Esta terminal está viva... y tiene estilo.'));
//console.warn(chalk.yellow('⚠️ Atención: Esto puede ponerse colorido.'));
//console.error(chalk.red('❌ Error simulado: algo salió demasiado bien.'));
//console.log(chalk.magenta('💡 Recuerda: la práctica hace al programador.'));

// BONUS: función básica
//function saludar(nombre) {
  //console.log(chalk.cyan(`Hola ${nombre}, ¡bienvenido al mundo JavaScript! 🌍`)); 
//}
function mostrarEstado(nombre) {
  console.log(chalk.cyan(`El programa ha iniciado! 🌍`)); 
  console.info(chalk.green('💡 Proceso en ejecucion'));
  console.warn(chalk.red('✅ El programa ha terminado exitosamente'));
}

mostrarEstado();



// Prueba de función
//("Equipo JS");