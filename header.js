 
 
 const header = (active) => {

   return `<header>
			<nav class="navbar w-100 navbar-expand-lg navbar-dark bg-transparent">
				<div class="container">
					<a class="navbar-brand" href="./index.html">
						<svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32">
							<path d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" fill="#05A081"></path>
							<path d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z" fill="#fff"></path>
						</svg>
					</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
						aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link ${active === 'home' && 'active'}" aria-current="page" href="./index.html">Home</a>
							</li>
							<li class="nav-item ${active === 'nature' && 'active'}">
								<a class="nav-link" href="./nature.html">Nature</a>
							</li>
							<li class="nav-item ${active === 'animals' && 'active'}">
								<a class="nav-link" href="./animal.html">Animals</a>
							</li>
							<li class="nav-item ${active === 'fitness' && 'active'}">
								<a class="nav-link" href="./fitness.html">Fitness</a>
							</li>
							<li class="nav-item ${active === 'fashion' && 'active'}">
								<a class="nav-link" href="./fashion.html">Fashion</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
    `;
};

export default header;