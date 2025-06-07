# some notes from next documentation and react documentation

**Por que es relevante la configuracion de paths en la instalaciòn?**

podemos evitar errores de referencia de archivos y asi externalizar las carpetas con los componentes y estylos.   
Aqui el ejemplo de nextjs.org:

```javascript
// antes
import { Button } from '../../../components/button'
 
// despues
import { Button } from '@/components/button'
```

```typescript
{
  "compilerOptions": {
    "baseUrl": "src/",
    "paths": {
      "@/styles/*": ["styles/*"],
      "@/components/*": ["components/*"]
    }
  }
}
```