document.addEventListener('DOMContentLoaded', () => {
    // state
    let draw = false
    // undo when movedown and stop until mouseup
    let undoMode = false

    // keep track all points and lines.
    let points = []
    let lines = []
    let svg = null

    function render() {
        // Create the selection area.
        svg = d3
            .select('#draw')
            .attr('width', window.outerWidth)
            .attr('height', window.outerHeight)

        svg.on('mousedown', function () {
            draw = true
            // Get mouse coordinate
            const coords = d3.mouse(this)
            draw_point(coords[0], coords[1], false)
        })

        svg.on('mouseup', () => {
            draw = false
        })

        svg.on('mousemove', function () {
            if (draw === false) return
            // Get mouse coordinate
            const coords = d3.mouse(this)
            draw_point(coords[0], coords[1], true)
        })

        // when button erase clicked, remove all lines and all points.
        document.querySelector('#erase').onclick = () => {
            for (let i = 0; i < points.length; i++) points[i].remove()
            for (let i = 0; i < lines.length; i++) lines[i].remove()
            points = []
            lines = []

            // When btn erase clicked, clear all data of picture.
            document.querySelector('#draw').innerHTML = ''

            // Remove picture on localStorage.
            localStorage.removeItem('picture')

            // return false; // Avoid reload page. (Better for UX)
        }

        // when button undo clicked, call undo() to remove last point and last line.
        document.querySelector('#undo').onclick = () => {
            undo()
        }

        document.querySelector('#undo').onmousedown = () => {
            undoMode = true
            // get delayTime
            const delayTime = document.querySelector('#delaytime-picker').value
            // Create new interval with delayTime.
            var undoInterval = setInterval(() => {
                if (undoMode) {
                    undo()
                } else {
                    clearInterval(undoInterval) // Clear this interval when undoMode = false
                }
            }, delayTime)
        }

        document.querySelector('#undo').onmouseup = () => {
            undoMode = false
        }
    }

    function draw_point(x, y, connect) {
        // get firuge out some properties.
        const color = document.querySelector('#color-picker').value
        const thickness = document.querySelector('#thickness-picker').value

        if (connect) {
            const last_point = points[points.length - 1]
            const line = svg
                .append('line')
                .attr('x1', last_point.attr('cx'))
                .attr('y1', last_point.attr('cy'))
                .attr('x2', x)
                .attr('y2', y)
                .attr('stroke-width', thickness * 2)
                .style('stroke', color)
            lines.push(line)
        }

        const point = svg
            .append('circle')
            .attr('cx', x)
            .attr('cy', y)
            .attr('r', thickness)
            .style('fill', color)
        points.push(point)
    }

    function undo() {
        if (points.length > 0) {
            // remove last point element
            points[points.length - 1].remove()
            // pop last point out of points array
            points.pop()
        }
        if (lines.length > 0) {
            // remove last line element
            lines[lines.length - 1].remove()
            // pop last line out of lines array
            lines.pop()
        }
        // return false; // Avoid reload page. (Better for UX)
    }

    render()
})
