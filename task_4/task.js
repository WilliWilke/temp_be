/* 
  Wir wollen eine Datenstruktur schreiben, in der wir Integer Schlüssel- Wert-Paare speichern
  können. Eine normale HashMap können wir leider nicht verwenden, weil wir sehr schnell
  nachprüfen können müssen. ob ein bestimmter Wert vorhanden ist. Bei der normalen
  HashMap müssten dazu alle Werte durchsucht werden.

  Schreiben Sie eine Klasse IntegerLookupMap mit den Methoden put, get und contains
  Die Methode get verhält sich wie bei einer HashMap<Integer, Integer›. Die Methode put
  verhält sich ähnlich zu der put Methode aus der Map, ignoriert aber alle Aufrufe, bei denen
  ein schon vorhandener Wert gespeichert werden soll. Die Methode contains soll true
  zurückgeben, genau dann, wenn der Wert unter einem beliebigen Schlüssel gespeichert ist.


  Alle Methoden müssen performant sein. es dürfen nicht schlimmstenfalls alle Elemente
  durchlaufen werden. Wir dürfen zugunsten der Laufzeitperformance aber Speichereffizienz
  opfern. Sie dürfen vorhandene Datenstrukturen aus Java zur Implementierung verwenden.
*/


class IntegerLookupMap {

  
  _keyValueStore = new Map();
  _valueStore    = new Map();


  put(key, value) {
    let contains = this.contains(value);

    if (contains) {
      return false;
    }

    this._keyValueStore.set(key, value);
    this._valueStore.set(value, key);

    return true;
  }

  get(key) {
    let v;

    if (this._keyValueStore.has(key)) {
      v  = this._keyValueStore.get(key);
    } else {
      throw 'Key ' + key + ' not defined!';
    }

    return v;
  }

  contains(value) { // return true / false
    return this._valueStore.has(value);
  }

}


let intlook = new IntegerLookupMap();


console.log(intlook.put(2,5));
console.log(intlook.put(6,1));
console.log(intlook.put(7,5));

console.log(intlook.contains(1));
console.log(intlook.get(6));