@extends('layouts.dashboard_layout_user')


@section('css')

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link href="assets/css/dashboard/page-css/profile.css" rel="stylesheet" type="text/css" media="all"/>
<link href="assets/css/dashboard/responsive/profile.css" rel="stylesheet" type="text/css"  media="screen and (max-width : 768px)"/>

<link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet">
@stop



@section('content')


<div class='loader'>
	<img src='assets/img/logo.png'/>
	<label class='loader-label'> Loading ... </label>
</div>
<div id='bodyContent' class='fade-out'>

			<div class='profileTopSection'>
				<center>
					<div class='profileBg'>
						<img class='profilePictureImg'/>
					</div>
				</center>
			</div>

		  <!--------------------------------

		        Tab Section

		  ------------------------------------>

		  <div class="tab">

				<ul class="tabs">
					<li>
						<a href="#">
		            <div class='tabTitle'>
		    					<p class='tabLabel'>PROFILE </p>
		            </div>
						</a>
						<span class=" tabArrow glyphicon glyphicon-triangle-bottom"></span>
					</li>

					<li>
						<a class='rankingTab' href="#">
		          <div class='tabTitle'>
		            <p class='tabLabel'> RANKING</p>
		          </div>
						</a>
						<span  class="tabArrow tabArrow_second  glyphicon glyphicon-triangle-bottom"></span>
					</li>
				</ul> <!-- / tabs -->




		  <!-----------------------------------------------

						Redeem Content

			-------------------------------------------------->
		  <div class="tab_content">

		     <!-- first tabs_item -->
		    <div class="tabs_item">

										<div class='col-sm-11 container container-top-menu profileSection'>
											<label class='titleSection'>User details</label>
												<div class='profileArea'>
														<div class='profileField col-sm-12'>
																<div class='col-sm-3 profileFieldLabel'>Name </div>
																<div class='col-sm-9 profileFieldValue name'> </div>
														</div>
														<div class='profileField col-sm-12'>
																<div class='col-sm-3 profileFieldLabel'>Email </div>
																<div class='col-sm-9 profileFieldValue email'> </div>
														</div>
														<div class='profileField col-sm-12'>
																<div class='col-sm-3 profileFieldLabel'>Age </div>
																<div class='col-sm-9 profileFieldValue age'></div>
														</div>
														<div class='profileField col-sm-12'>
																<div class='col-sm-3 profileFieldLabel'>Contact </div>
																<div class='col-sm-9 profileFieldValue contact'> </div>
														</div>
														<div class='profileField col-sm-12'>
																<div class='col-sm-3 profileFieldLabel'>Gender </div>
																<div class='col-sm-9 profileFieldValue gender'></div>
														</div>
														<div class='profileField col-sm-12'>
																<div class='col-sm-3 profileFieldLabel'> Address</div>
																<div class='col-sm-9 profileFieldValue address'> </div>
														</div>
												</div>
										</div>

					<div class='col-sm-11 container container-top-menu profileSection goalSection'>
						<label class='titleSection'>Goal description</label>
						<p class='goal'></p>
					</div>

					<div class='col-sm-11 container container-top-menu profileSection attributeSection'>
						<label class='titleSection'>User attribute</label>
						<p class='attribute'>
							<div class='attributeList'>

							</div>

						</p>
					</div>




		    </div>



			 <!-- ranking item -->
			<div class="tabs_item">
				<div class='col-sm-11 container container-top-menu rankingSection'>
						<iframe id='targetFrame' class='rankingFrame' src="assets/iframe/ranking/index.html"></iframe>
				</div>
				<div class='scroll'></div>
			</div>

		  </div>
		</div>







</div>
@stop




@section('javascript')
 <script src="assets/js/dashboard/page-js/profile.js"></script>
@stop
