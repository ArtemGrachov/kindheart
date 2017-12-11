const getScrollBarWidth = function () {
    const wrap = $(document.createElement('div'));
    wrap.css({
        'width': '100px',
        'height': '100px',
        'background': 'red',
        'overflow-y': 'scroll',
        'position': 'absolute',
    })
    const inner = $(document.createElement('div'));
    inner.css({
        'width': '100%',
        'height': '200px'
    })
    wrap.append(inner);
    $('body').append(wrap);
    const scrollWidth = (wrap.width() - inner.width());
    wrap.remove();
    return scrollWidth;
}