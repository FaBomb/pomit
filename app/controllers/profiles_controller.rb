class ProfilesController < ApplicationController
  def edit
    @profile = Profile.find_by(user_id: params[:id])
    
  end

  def show
    @profile = Profile.find_by(user_id: params[:id])
  end

  def new
    @profile = Profile.new
  end

  def create
    @profile = Profile.new(profile_params)
    @profile.user_id = current_user.id
    if @profile.save
      redirect_to "/articles"
    else
      redirect_to action: "new"
    end
  end

  def update
    @profile = Profile.find(params[:id])
    if @profile.update(profile_params)
      redirect_to "/articles"
    else
      redirect_to action: "new"
    end
  end

  private
  def profile_params
    params.require(:profile).permit(:header_image, :hobby, :my_special ,:insta, :twitter, :facebook, :about, :specialty_title, :specialty_detail, :skill_title, :skill_detail, :qualification_title, :qualification_detail, :folio_image, :folio_title, :folio_detail, :name, :univercity, :icon)
  end
end
