import './app.css';

document.querySelector('#navBar').innerHTML = `
<div class="navbar bg-base-100">
<div class="navbar-start">
  <div class="dropdown">
    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </div>
    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><a>Services</a>
   
      <li><a>About us</a></li>
    </ul>
  </div>
  <a ><img src="../images/lolis_logo.png"/></a>
</div>
<div class="navbar-center hidden lg:flex">
  <ul class="menu menu-horizontal px-1">
    <li><a>Home</a></li>
    <li><a>Services</a></li>
    <li><a>About us</a></li>
  </ul>
</div>

</div>
`;

document.querySelector('#app #slider').innerHTML = `

<div class="carousel w-full">
  <div id="item1" class="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" class="w-full" />
  </div> 
  <div id="item2" class="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" class="w-full" />
  </div> 
  <div id="item3" class="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" class="w-full" />
  </div> 
  <div id="item4" class="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" class="w-full" />
  </div>
</div> 
<div class="flex justify-center w-full py-2 gap-2">
  <a href="#item1" class="btn btn-xs">1</a> 
  <a href="#item2" class="btn btn-xs">2</a> 
  <a href="#item3" class="btn btn-xs">3</a> 
  <a href="#item4" class="btn btn-xs">4</a>
</div>

`;
