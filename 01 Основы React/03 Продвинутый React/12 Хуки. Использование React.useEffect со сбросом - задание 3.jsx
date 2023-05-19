function MouseTrack({trackMouse}) {
  const [mousePosition, setMousePosition] = React.useState([])

  const trackMousePos = (e) => {
    setMousePosition([e.clientX, e.clientY])
  }

  React.useEffect(() => {
    document.addEventListener('mousemove', trackMousePos)

    return () => {
      document.removeEventListener('mousemove', trackMousePos)
    }
  }, [])

  return (
    <div>
      <h3 className="app__title">Позиция курсора:</h3>
      <h2>
        X: {trackMouse ? mousePosition[0] : ' -'}
        <br />
        Y: {trackMouse ? mousePosition[1] : ' -'}
      </h2>
    </div>
  )
}
