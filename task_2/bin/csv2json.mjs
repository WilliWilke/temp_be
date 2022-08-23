export default function csv2json(csv) {
  let json    = [],
      lines   = csv.split('\n'),
      headers = lines[0].split(';');

  for (let i = 1; i < lines.length; i++) {
    let line = lines[i], obj = {}, values = [];

    for (let j = 0, c, inQuotes = false, str = ''; j < line.length; j++) {
      c = line[j];

      if (c == ';' && !inQuotes || j == line.length - 1) {
        values.push(str);

        str = ''; 
        
        continue;
      } else if (c == '\'') {
        inQuotes = !inQuotes;

        continue;
      } else if (c == '\\') {
        j++; 

        str += line[j];
        
        continue;
      }

      str += c;

    }

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = values[j];
    }

    json.push(obj);

  }

  return JSON.stringify(json, null, 2);
}
