class TeamInfoController < ApplicationController
  # 返却するチーム情報の最大レコード数
  TEAM_INFOS_LIMIT = 20

  def index
    address_state = params[:address_state]
    sport_id = to_int(params[:sport_id])
    grade_id = to_int(params[:grade_id])
    page = to_int(params[:page])

    # 最初から{offset}番目のレコードから{TEAM_INFOS_LIMIT}件のレコードを取得する
    offset = TEAM_INFOS_LIMIT * ((page ||= 1) - 1)

    begin
      team_infos = Team.joins(:sport, :grade).select("
        team.id,
        team.uuid,
        team.name as team_name,
        team.reception_status,
        team.icon_path,
        team.description,
        team.address_state,
        team.address_city,
        sport.name as sport_name,
        grade.name as grade_name
      ")
      extracted_by_address_state = extract_by_address_state(team_infos, address_state)
      extracted_by_sport_id = extract_by_sport_id(extracted_by_address_state, sport_id)
      extracted_by_grade_id = extract_by_grade_id(extracted_by_sport_id, grade_id)
      paged = extracted_by_grade_id.limit(TEAM_INFOS_LIMIT).offset(offset)
      render :json => paged
    rescue => e
      render :json => { "error class" => e.class, "error message" => e.message }, status: 500
    end
  end

  private

  def extract_by_address_state(team_infos, address_state)
    if !address_state.blank?
      team_infos.where(team: { address_state: address_state })
    else
      team_infos
    end
  end

  private

  def extract_by_sport_id(team_infos, sport_id)
    if !sport_id.blank?
      team_infos.where(sport: { id: sport_id })
    else
      team_infos
    end
  end

  private

  def extract_by_grade_id(team_infos, grade_id)
    if !grade_id.blank?
      team_infos.where(grade: { id: grade_id })
    else
      team_infos
    end
  end
end
