class ProfilesController < ApplicationController
  def edit
    @profile = Profile.find_by(user_id: params[:id])
    
  end

  def show
    @profile = Profile.find_by(user_id: params[:id])
    @explains = @profile.explain
  end

  def new
    @profile = Profile.new
    @profile.explains.build
  end

  def create
    @profile = Profile.new(profile_params)
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
    params.require(:profile).permit(
      :header_image,
      :hobby,
      :my_special,
      :insta,
      :twitter,
      :facebook,
      :about,
      :name,
      :univercity,
      :icon,
      explains_attributes: [:id,
                           :specialty_title,
                           :specialty_detail,
                           :skill_title,
                           :skill_detail,
                           :qualification_title,
                           :qualification_detail,
                           :folio_image,
                           :folio_title,
                           :folio_detail,
                           :_destroy]
    ).merge(user_id: current_user.id)
  end
end
