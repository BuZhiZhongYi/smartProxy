路由路径
      <Route path='/' element={<App2 />}>
                <Route path='/' element={<Home />}></Route>
                <Route path='/purchase/dynamic' element={<Purchase />}></Route>
                <Route path='/purchase/stastic' element={<Stastic/>}></Route>
                <Route path='/program/dynamic' element={<Program />}></Route>
                <Route path='/tool' element={<Tool />}></Route>
                <Route path='/help' element={<Help />}></Route>
        </Route>

        <Route path='/' element={<App />}>
          <Route path='/listlist' element={<Listlist />}></Route>
          <Route path='/listtable' element={<Listtable />}></Route>
          <Route path='/edit/*' element={<Edit />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>