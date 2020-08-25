export const inputs = [
  {
    componentName: 'RangeField',
    title: 'Number of root nodes',
    id: 'rootNodes',
    min: 1,
    max: 1000,
    start: 3
  },
  {
    componentName: 'RangeFieldNoUiSlider',
    title: 'Possible number of children',
    id: 'randChildren',
    slider: {
      start: [1, 3],
      connect: true,
      step: 1,
      orientation: 'horizontal',
      range: {
        min: 0,
        max: 100
      }
    } 
  },
  {
    componentName: 'RangeField',
    title: 'The maximum nesting',
    id: 'maximumNesting',
    min: 0,
    max: 10,
    start: 2
  }
]

export const fruits = ["Яблоко", "Апельсин", "Слива", "Банан", "Черешня", "Мандарин", "Грейпфрут", "Абрикос", "Вишня", "Чернослив"]
