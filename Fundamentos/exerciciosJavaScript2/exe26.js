function contarCaractere(caractere, string)
{
  let contador = 0 
  for(let i = 0; i < string.length; i++) {
      if(string.charAt(i) === caractere) {
          contador++
      }
  }
  console.log(contador)
}
contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1
