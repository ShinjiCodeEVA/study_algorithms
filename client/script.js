import fs from 'fs'
import path from 'path'

const folderName = process.argv[2]

try {
    // deleting the index.css
    fs.unlinkSync(`./${folderName}/App.css`)
    
    // replacing the import of index.css to index.scss in main.jsx
    const mainPath = `./${folderName}/main.jsx`
    let mainContent = fs.readFileSync(`./${folderName}/main.jsx`, 'utf-8')
    mainContent = mainContent.replace("'./index.css'", "'./index.scss'")

    // clearing the App.jsx
    const appPath = `./${folderName}/App.jsx`
    let appContent = fs.readFileSync(`./${folderName}/App.jsx`, 'utf-8')
    appContent = appContent.replace(appContent, `\nfunction App() {
      
  return (
     <>
        
     </>
  )
}
    
export default App
    `)

    // changing the file ext
    const rootPath = './src/index.css'
    const base = path.basename(rootPath, path.extname(rootPath))
    const dirname = path.dirname('src/index.css')
    const newPathWithExt = path.join(dirname, base + ".scss")
    fs.renameSync(rootPath, newPathWithExt)

    fs.writeFileSync(mainPath, mainContent)
    fs.writeFileSync(appPath, appContent)
    console.log('Script run successfully')
} catch(err) {
    console.log(err)
}

