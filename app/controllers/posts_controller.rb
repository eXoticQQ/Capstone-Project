class PostsController < ApplicationController

    # skip_before_action :authorize, only: [:create]
    before_action :authorize, except: [:new, :create]

    def index
        posts = Post.all.each do |post|
            post.trending_posts
        end
        render json: posts, status: :ok
    end

    def show
        render json: find_post
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def update
        post = find_post
        post.update(post_params)
        render json: post, status: :accepted

    end

    def destroy
        post = find_post
        post.destroy
        head :no_content
    end

    # def trending_posts
    #    posts = Post.all.order(created_at: :desc)
    #    render json: posts, status: :ok
    # end

    private

    def find_post
        Post.find(params[:id])
    end

    def post_params
        params.permit(:description, :image, :likes, :user_id)
    end

end
