import React from "react";
import "./GenericList.css";
import FacetsType from "../../@Types/FacetsType";

const GenericList = (props: any) => {
    const facets:FacetsType[] = props.facets;
    const datas = props.datas;

    const RenderFacets = () => {
        let facetsComponent: any = [];
        facets.map((facet:FacetsType)=>{
            let classeField:string = "FieldList " + facet.Width;
            
            facetsComponent.push(
                <span className={classeField}>{facet.Name}</span>
            );
        })

        return facetsComponent;
    }

    const RenderList = () => {
        if(!datas) return;
        let datasComponent:any = [];

        datas.map((data: any, i:number)=>{
           datasComponent.push(
            <div className="GenericListRow" key={i}>
                 <span className='FieldList'>{data.Id}</span>
                 <span className='FieldList'>{data.Title}</span>
                 <span className='FieldList'>{data.Autor}</span>
                 <span className='FieldList'>{data.Category.Description}</span>
                 <span className='FieldList'>{data.CreationDate}</span>
                 <span className='FieldList'>{data.CreationLocality}</span>
            </div>
           )
        })
        return datasComponent;
    }

    return (
        <section className="GenericList">
            <div className='GenericListHeader'>
                {RenderFacets()}
            </div>
            {RenderList()}
        </section>
    );
}

export default GenericList;
