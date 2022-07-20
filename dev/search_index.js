var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = qMRI","category":"page"},{"location":"#qMRI","page":"Home","title":"qMRI","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for qMRI.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [qMRI]","category":"page"},{"location":"#qMRI.T2ExpFit-Union{Tuple{T}, Tuple{Array{T, 4}, Union{StepRange{<:Real, <:Real}, Vector{<:Real}}}, Tuple{Array{T, 4}, Union{StepRange{<:Real, <:Real}, Vector{<:Real}}, Any}} where T","page":"Home","title":"qMRI.T2ExpFit","text":"T2ExpFit(ima::Array{T,4},t::Vector{Number},p0=nothing) where T\n\nFit the relaxation parameters T2 with the equation : S(t) = M_0 exp(-fractT2).\n\nArguments\n\nima::Array{T,4}: image with dimension (x,y,z,t)\nt::Union{Vector{<:Real},StepRange{<:Real,<:Real}}: times vector in ms\np0=nothing: starting values for fit, if empty p0=[maximum(ima),30]\n\nKeywords\n\nremovePoint::Bool=true: remove the first point before fitting\n\nReturns maps with format (x,y,z)\n\nM₀ maps (no unit)\nT₂ maps (ms)\n\n\n\n\n\n","category":"method"},{"location":"#qMRI.T2NoiseExpFit-Union{Tuple{T}, Tuple{Array{T, 4}, Union{StepRange{<:Real, <:Real}, Vector{<:Real}}}, Tuple{Array{T, 4}, Union{StepRange{<:Real, <:Real}, Vector{<:Real}}, Any}} where T","page":"Home","title":"qMRI.T2NoiseExpFit","text":"T2NoiseExpFit(ima::Array{T,4},t::Vector{Number},p0=nothing; kwargs...) where T\n\nFit the relaxation parameters T2 with the equation : S(t) = sqrt(M_0 exp(-fractT2))^2 + 2 L sigma_g^2 where L est le nombre de canaux, et sigma_g le bruit gaussien sur les image\n\nArguments\n\nima::Array{T,4}: image with dimension (x,y,z,t)\nt::Union{Vector{<:Real},StepRange{<:Real,<:Real}}: times vector in ms\np0=nothing: starting values for fit, if empty p0=[maximum(ima),30,maximum(ima)*0.1]\n\nKeywords\n\nremovePoint::Bool=true: remove the first point before fitting\nL::Int=1: Number of coil elements\n\nReturns maps with format (x,y,z)\n\nM₀ maps (no unit)\nT₂ maps (ms)\nNoise maps (no unit)\n\nBibliography\n\nCárdenas-Blanco A, Tejos C, Irarrazaval P, Cameron I. Noise in magnitude magnetic resonance images. Concepts Magn Reson Part A [Internet]. 2008 Nov;32A(6):409–16. Available from: http://doi.wiley.com/10.1002/cmr.a.20124\nFeng Y, He T, Gatehouse PD, Li X, Harith Alam M, Pennell DJ, et al. Improved MRI R 2 * relaxometry of iron-loaded liver with noise correction. Magn Reson Med [Internet]. 2013 Dec;70(6):1765–74. Available from: http://doi.wiley.com/10.1002/mrm.24607\n\n\n\n\n\n","category":"method"}]
}
