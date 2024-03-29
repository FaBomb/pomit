class ApplicationController < ActionController::Base
    def after_sign_in_path_for(resource) 
        articles_path
    end
    def self.render_with_signed_in_user(user, *args)
        ActionController::Renderer::RACK_KEY_TRANSLATION['warden'] ||= 'warden'
        proxy = Warden::Proxy.new({}, Warden::Manager.new({})).tap{|i| i.set_user(user, scope: :user) }
        renderer = self.renderer.new('warden' => proxy)
        renderer.render(*args)
      end
end
