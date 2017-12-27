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
									<label class="control-label" for="selectbasic-0">Gender</label>
									<div class="controls">
										<select id="selectbasic-0" name="selectbasic-0" class="input-xlarge gender">
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
						<div role="tabpanel" class="tab-pane" id="optimization">
							<div class="design-process-content">
								<div class="control-group">

									<div class="controls">
										<button type='button' class='btn btn-default updateProfile'> Update profile </button>
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
