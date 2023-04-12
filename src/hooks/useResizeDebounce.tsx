//debounce é uma técnica para evitar chamadas extras desnecessárias de funções
export function useResizeDebounce(func:() => void) {
  function debounce() {
    let initialTimer: number | undefined = undefined;

    window.addEventListener('resize', () => {
      clearTimeout(initialTimer);
      initialTimer =  setTimeout(() => {
        console.log('asdasd')
        func()
      }, 250);
    })
  }

  return debounce; 
}