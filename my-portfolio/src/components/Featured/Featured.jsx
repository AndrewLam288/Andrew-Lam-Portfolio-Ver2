import { Wrap, Gallery, Tile } from './Featured.styles'

export default function Featured() {
  return (
    <Wrap>
      <h3 style={{ marginTop: 0 }}>Featured</h3>
      <Gallery>
        <Tile />
        <Tile />
        <Tile />
      </Gallery>
    </Wrap>
  )
}
