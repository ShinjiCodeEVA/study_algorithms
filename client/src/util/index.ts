

export function toCamelCase(str: string): string {
    str = str.toLowerCase();

    let res = str.split(" ").map((el, index) => { 
        return index !== 0 ? el.charAt(0).toUpperCase() + el.substring(1) : el
      });
      
      const result = res.toString();
      
      let camelCase = "";
      
      let alpha = 'abcdefghijklmnopqrstuvwxyz';
      alpha += alpha.toUpperCase();
      
      for (let i = 0; i < result.toString().length; i++) { 
        let el = result.charAt(i);
      
        if (alpha.includes(el))
          camelCase += el;
      }   
      
      return camelCase;
}

