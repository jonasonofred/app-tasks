/* Tools */
import { useState } from "react";





function useLocalStorage(itemName, initialValue) {

  /* Realizando persistencia de datos con Local Storage */
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem) {

    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;

  } else {

    parsedItem = JSON.parse(localStorageItem);

  }



  /* Usando el estado de React con los React Hooks */
  const [item, setItem] = useState(parsedItem);



  /* Función 'puente' para guardar los datos en Local Storage y actualizar el estado de las tareas. */
  const saveItem = newItem => {
    const stringItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringItem);
    setItem(newItem);
  }



  return [ item, saveItem ];

}

export { useLocalStorage };