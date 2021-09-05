import { Store } from 'pullstate'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][]
  colorSelect: string;
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i = 0; i < 16; i++) {
    output[i] = []
    for (let j = 0; j < 16; j++) {
      output[i].push('#FFFFFF')
    }
  }
  return output
}

const colorSet: string[] = ['#000000', '#804000', '#FE0000', '#FE6A00', '#FFD800', '#00FF01', '#FFFFFF', '#01FFFF', '#0094FE', '#0026FF', '#B100FE', '#FF006E',]

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  colorSelect: "#000000"
})

export const setSelected = (color: string) => {
  PixelPainterStore.update(s => {
    s.colorSelect = color;
  })
}

export const setCell = (x: number, y: number) => {
  PixelPainterStore.update(s => {
    s.canvas[x][y] = s.colorSelect;
  })
}

export const clearCanvas = () => {
  PixelPainterStore.update(s => {
    s.canvas = createEmptyCanvas();
  })
}

export const createRandomCanvas = () => {
  PixelPainterStore.update(s => {
    for (let i = 0; i < 16; i++) {
      s.canvas[i] = []
      for (let j = 0; j < 16; j++) {
        s.canvas[i].push(colorSet[Math.floor(Math.random() * 12)]);
      }
    }
  })
}
