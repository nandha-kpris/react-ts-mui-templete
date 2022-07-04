/*
 * Copyright (C) 2022-2023 KPR Info Solutions
 * File Name: index.js
 * Description:
 * Author: Nandhakumar Palanivel
 * Author Email: nandhakumar.planivel@kprinfo.com
 * Copyright (c) KPR Info Solutions, 2022
 *
 */

export async function setLocalStorageItem(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.error(
      'ERROR OCCURED WHILE SETTING LOCAL STORAGE ITEM',
      'KEY',
      key,
      'VALUE',
      value,
      e
    );
  }
}

export function removeLocalStorageItem(key: string) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error(
      'ERROR OCCURED WHILE REMOVING LOCAL STORAGE ITEM',
      'KEY',
      key,
      e
    );
  }
}

export function getLocalStorageItem(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return null;
    console.error(
      'ERROR OCCURED WHILE GETTING LOCAL STORAGE ITEM',
      'KEY',
      key,
      e
    );
  }
}

 export function clearAll() {
  localStorage.clear();
 }
// import { useState } from "react";

// export const useLocalStorage = (keyName: string, defaultValue: any) => {
//   const [storedValue, setStoredValue] = useState(() => {
//     try {
//       const value = window.localStorage.getItem(keyName);
//       if (value) {
//         return JSON.parse(value);
//       } else {
//         window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
//         return defaultValue;
//       }
//     } catch (err) {
//       return defaultValue;
//     }
//   });
//   const setValue = (newValue: any) => {
//     try {
//       window.localStorage.setItem(keyName, JSON.stringify(newValue));
//     } catch (err) {}
//     setStoredValue(newValue);
//   };
//   return [storedValue, setValue];
// };