jest.mock('@/assets/playbt_logo.png', () => 'stub')
jest.mock('@/assets/playbt.png', () => 'stub')
jest.mock('@/assets/conchie_logo.png', () => 'stub')
jest.mock('@/assets/conchie_assessment.png', () => 'stub')
jest.mock('@/assets/eab_log.png', () => 'stub')
jest.mock('@/assets/eab.png', () => 'stub')
jest.mock('@/assets/bqpca_logo.png', () => 'stub')
jest.mock('@/assets/bqpca.png', () => 'stub')
jest.mock('@/assets/preplogo.png', () => 'stub')
jest.mock('@/assets/Prep.png', () => 'stub')
jest.mock('@/assets/savethechildern.png', () => 'stub')
jest.mock('@/assets/ThePema.jpg', () => 'stub')
jest.mock('@/assets/Kuenjom.jpg', () => 'stub')
jest.mock('@/assets/Kuenjom2.jpeg', () => 'stub')
jest.mock('@/assets/DSP.jpeg', () => 'stub')
jest.mock('@/assets/smart_parking.png', () => 'stub')
jest.mock('@/assets/Desung.jpeg', () => 'stub')

const projectsData = require('../../src/data/Projects').default

function parsedDescription(description) {
  return description.split('\n')
    .filter(line => line.trim())
    .map(line => ({
      isBullet: line.trim().startsWith('-'),
      text: line.trim().startsWith('-') ? line.trim().slice(1).trim() : line.trim()
    }))
}

describe('parsedDescription', () => {
  test('converts bullet lines to isBullet: true', () => {
    const result = parsedDescription('Intro\n- Item one\n- Item two')
    expect(result).toEqual([
      { isBullet: false, text: 'Intro' },
      { isBullet: true, text: 'Item one' },
      { isBullet: true, text: 'Item two' },
    ])
  })

  test('strips empty lines', () => {
    const result = parsedDescription('Line one\n\n\nLine two')
    expect(result).toHaveLength(2)
  })

  test('handles description with no bullets', () => {
    const result = parsedDescription('Just a plain description')
    expect(result).toEqual([{ isBullet: false, text: 'Just a plain description' }])
  })
})

describe('Projects data', () => {
  test('every project has required fields', () => {
    projectsData.forEach(project => {
      expect(project).toHaveProperty('id')
      expect(project).toHaveProperty('title')
      expect(project).toHaveProperty('company')
      expect(project).toHaveProperty('date')
      expect(project).toHaveProperty('role')
      expect(project).toHaveProperty('description')
      expect(project).toHaveProperty('stack')
      expect(Array.isArray(project.stack)).toBe(true)
    })
  })

  test('project IDs are unique', () => {
    const ids = projectsData.map(p => p.id)
    const unique = new Set(ids)
    expect(unique.size).toBe(ids.length)
  })
})
