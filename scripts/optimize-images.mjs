import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const assetsDir = path.resolve('src/assets')

function findPngFiles(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true })

  return entries.flatMap((entry) => {
    const fullPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      return findPngFiles(fullPath)
    }

    if (entry.isFile() && entry.name.toLowerCase().endsWith('.png')) {
      return [fullPath]
    }

    return []
  })
}

const files = findPngFiles(assetsDir)

console.log(`Encontradas ${files.length} imagens PNG.\n`)

for (const file of files) {
  const output = file.replace(/\.png$/i, '.webp')

  const before = fs.statSync(file).size

  await sharp(file)
    .webp({
      quality: 82,
      effort: 6,
    })
    .toFile(output)

  const after = fs.statSync(output).size

  const beforeMB = (before / 1024 / 1024).toFixed(2)
  const afterMB = (after / 1024 / 1024).toFixed(2)
  const reduction = ((1 - after / before) * 100).toFixed(1)

  console.log(
    `${path.relative(assetsDir, file)}: ${beforeMB} MB → ${afterMB} MB (-${reduction}%)`,
  )
}

console.log('\nOtimização concluída.')