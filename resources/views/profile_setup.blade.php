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
	<div class='pictureSection'>
		<img class='profileSetupBg' src='assets/img/profileLogo.png'/>
	</div>



	<section class="design-process-section" id="process-tab">
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<!-- design process steps-->
					<!-- Nav tabs -->
					<ul class="nav nav-tabs process-model more-icon-preocess" role="tablist">
						<li role="presentation" class="active"><a href="#discover" aria-controls="discover" role="tab" data-toggle="tab"><i class="fa fa-user" aria-hidden="true"></i>
							<p>User picture</p>
						</a></li>
						<li role="presentation"><a href="#strategy" aria-controls="strategy" role="tab" data-toggle="tab"><i class="fa fa-info" aria-hidden="true"></i>
							<p>User Details</p>
						</a></li>
						<li role="presentation"><a href="#optimization" aria-controls="optimization" role="tab" data-toggle="tab"><i class="fa fa-flag" aria-hidden="true"></i>
							<p>User Goal</p>
						</a></li>
					</ul>
					<!-- end design process steps-->
					<!-- Tab panes -->
					<div class="tab-content">
						<div role="tabpanel" class="tab-pane active" id="discover">
							<div class="design-process-content">
								<div class='inputArea'>
									<form action="#" enctype="multipart/form-data" method="POST">
										<div class='imageSection col-sm-12'>
											<img id="uploadedImage" src="#" />
										</div>
										<div class="file-input-wrapper col-sm-12">
											<input type='hidden' class='userImg' />
											<button class="btn btn-default" type="button">Upload Profile Image</button>
											<input  id='image' type="file" name="image"  class='userFileUpload' accept="image/*" onchange="readURL(this);"/>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane" id="strategy">
							<div class="design-process-content">
								<!-- Text input-->
								<div class='detailSection'>
									<div class="control-group">
										<label class="control-label" for="textinput-0">Name</label>
										<div class="controls">
											<input id="textinput-0" name="textinput-0" type="text" placeholder="Text here ..." class="input-xlarge name">

										</div>
									</div>

									<!-- Text input-->
									<div class="control-group">
										<label class="control-label" for="textinput-1">Email</label>
										<div class="controls">
											<input id="textinput-1" name="textinput-1" type="text" placeholder="Text here ..." class="input-xlarge email">

										</div>
									</div>

									<!-- Text input-->
									<div class="control-group">
										<label class="control-label" for="textinput-2">Contact </label>
										<div class="controls">
											<input id="textinput-2" name="textinput-2" type="text" placeholder="Text here ..." class="input-xlarge contact">

										</div>
									</div>

									<!-- Text input-->
									<div class="control-group">
										<label class="control-label" for="textinput-3">Age</label>
										<div class="controls">
											<input id="textinput-3" name="textinput-3" type="text" placeholder="" class="input-xlarge age">

										</div>
									</div>

									<!-- Select Basic -->
									<div class="control-group">
										<label class="control-label" >Gender</label>
										<div class="controls">
											<select class='genderInput'>
												<option value ='male' >Male</option>
												<option value='female'>Female</option>
											</select>
										</div>
									</div>

									<!-- Textarea -->
									<div class="control-group">
										<label class="control-label" for="textarea-0">Address</label>
										<div class="controls">
											<textarea id="textarea-0" name="textarea-0" class='address'></textarea>
										</div>

									</div>
								</div>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane" id="optimization">
							<div class="design-process-content">
								<div class="control-group">
									<div class='detailSection'>

										<!-- Select Basic -->
										<div class="control-group">
											<label class="control-label" >I want to ... </label>
											<div class="controls">
												<select  class='goalCondition' >
													<option value ='lose' >Lose</option>
													<option value='gain'>Gain</option>
													<option value='maintain'>Maintain</option>
												</select>
											</div>
										</div>

										<!-- Select Basic -->
										<div class="control-group">
											<label class="control-label" >What  </label>
											<div class="controls">
												<select class='goalTarget' >
													<option value ='weight' >Weight</option>
													<option value='fat'>Fat</option>
													<option value='water'>Water</option>
													<option value='muscle'>Muscle</option>
													<option value='visceral'>Visceral</option>
													<option value='bmr'>BMR</option>
													<option value='pr'>PR</option>
												</select>
											</div>
										</div>

										<div class="control-group">
											<label class="control-label">How much / How long</label>
											<div class="controls">
												<input  name="goalValue" type="text" placeholder="" class="input-xlarge goalValue">
												<small id="emailHelp" class="form-text text-muted"><a href='#'> Need help ?</a> </small>
											</div>
										</div>
									<div class="controls updateSection">
										<button type='button' class='btn btn-default updateProfile'> Done !</button>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</section>





</div>
@stop




@section('javascript')

<script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js'></script>
<script src="assets/js/dashboard/page-js/profile.js"></script>

@stop
