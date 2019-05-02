// The div for tooltips
var div = d3
  .select('body')
  .append('div')
  .attr('class', 'tooltip')
  .style('opacity', 0)

// The svg
var svg = d3.select('svg'),
  width = +svg.attr('width'),
  height = +svg.attr('height')

// Map and projection
var path = d3.geoPath()
var projection = d3
  .geoNaturalEarth()
  .scale(width / 2 / Math.PI)
  .translate([width / 2, height / 2])
var path = d3.geoPath().projection(projection)

// Data and color scale
var data = d3.map()
var colorScheme = d3.schemeGreens[6]
colorScheme.unshift('#eee')
var colorScale = d3
  .scaleThreshold()
  .domain([1, 6, 11, 26, 101, 1001])
  .range(colorScheme)

// Legend
var g = svg
  .append('g')
  .attr('class', 'legendThreshold')
  .attr('transform', 'translate(20,20)')
g.append('text')
  .attr('class', 'caption')
  .attr('x', 0)
  .attr('y', -6)
  .text('Scale')
var labels = ['0', '1-5', '6-10', '11-25', '26-100', '101-1000', '> 1000']
var legend = d3
  .legendColor()
  .labels(function(d) {
    return labels[d.i]
  })
  .shapePadding(4)
  .scale(colorScale)
svg.select('.legendThreshold').call(legend)

// Load external data and boot
d3.queue()
  .defer(d3.json, 'http://enjalot.github.io/wwsd/data/world/world-110m.geojson')
  .defer(d3.json, 'http://localhost:3005/countries', function(d) {
    data.set(d.code, +d.total)
  })
  .await(ready)

function ready(error, topo) {
  if (error) throw error

  // Draw the map
  svg
    .append('g')
    .attr('class', 'country')
    .selectAll('path')
    .data(topo.features)
    .enter()
    .append('path')
    .attr('fill', function(d) {
      // Pull data for this country
      d.total = data.get(d.id) || 0
      // Set the color
      return colorScale(d.total)
    })
    .on('mouseover', function(d) {
      renderInfo(d)
    })
    .on('mouseout', function(d) {
      div
        .transition()
        .duration(500)
        .style('opacity', 0)
    })
    .attr('d', path)
}

function renderInfo(d) {
  div
    .transition()
    .duration(200)
    .style('opacity', 0.9)
  div
    .html(d.id + '<br/>' + d.total)
    .style('left', d3.event.pageX + 'px')
    .style('top', d3.event.pageY - 28 + 'px')
}
