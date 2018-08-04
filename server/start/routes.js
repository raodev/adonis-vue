'use strict'


const Route = use('Route')
Route.any('*', ({ view, request, respone })=>{
    return view.render('spa.index')
})


